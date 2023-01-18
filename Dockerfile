# Build Stage
FROM ubuntu:20.04 as builder

## Install build dependencies.
RUN apt-get update && \
    DEBIAN_FRONTEND=noninteractive apt-get install -y cmake clang curl git-all build-essential
RUN curl --proto "=https" --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y
RUN ${HOME}/.cargo/bin/rustup default nightly
RUN ${HOME}/.cargo/bin/cargo install -f cargo-fuzz

## Add source code to the build stage.
ADD . /egg
WORKDIR /egg/fuzz
RUN ${HOME}/.cargo/bin/cargo +nightly fuzz build

FROM ubuntu:20.04 as package

## TODO: Change <Path in Builder Stage>
COPY --from=builder /egg/fuzz/target/x86_64-unknown-linux-gnu/release/parser /
