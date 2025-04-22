# flux-demo

Demonstrates how to get flux up and running quickly with KIND cluster.

## Setup

Create the cluster:

```bash
# kind config can be found in /setup/kind-config.yaml
kind create cluster --wait 5m --name flux-dev --config kind-config.yaml
```

Export Github token:

```bash
export GITHUB_TOKEN=<my-token>
```

Bootstrap Flux:

```bash
flux bootstrap github \                                                                                                                               -╯
  --owner="k-weaver" \
  --repository="flux-demo" \
  --branch="main" \
  --path="./clusters/flux-demo-dev" \
  --personal
```
