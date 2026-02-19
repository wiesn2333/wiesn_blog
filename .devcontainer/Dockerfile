FROM fedora:43

RUN dnf install -y neovim git unzip bash-completion
RUN useradd -m -s /bin/bash dev

USER dev
WORKDIR /home/dev
COPY bashrc .
RUN cat bashrc >> ~/.bashrc && rm bashrc
RUN curl -fsSL https://bun.com/install | bash -s "bun-v1.3.9"
