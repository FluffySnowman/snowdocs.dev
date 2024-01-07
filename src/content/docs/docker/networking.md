---
title: Docker Networking
description: A guide to building scalable applications with ease
---

## Docker's Networking System

Each container running on a machine has it's own IP address and is on a virtual 
network and interface which is usually `docker0` with the inet as `172.17.x.x`.

This can be checked by running the following commands and looking for the 
docker network 

```bash title="Terminal"
ip a 

# or
ifconfig

# or
nmcli 
```



