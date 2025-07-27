FROM bitnami/postgresql:15

# Install git and build deps
USER root

RUN install_packages git make gcc libc-dev postgresql-server-dev-15

# Clone and build pgvector
RUN git clone --branch v0.5.1 https://github.com/pgvector/pgvector.git \
  && cd pgvector \
  && make \
  && make install \
  && cd .. && rm -rf pgvector

USER 1001
