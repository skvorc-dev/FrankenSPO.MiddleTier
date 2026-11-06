<p align="center"><img src="branding/banner.svg" alt="Project banner" width="100%"/></p>

# FrankenSPO.MiddleTier

> **Status: skeleton — no runtime behavior yet.** Solution, CI and tests build against a pinned [FrankenSPO](https://github.com/skvorc-dev/FrankenSPO) pre-release. There is no public API until a feature works and is tested.

Remote ObjectSpace and versioned persistence protocol for managed and native-language clients.

The planned MiddleTier supplies remote tracked-object behavior and short-lived server-side transaction execution. Its C# and optional native/Rust clients implement a documented RemoteObjectSpace contract. It is not a generic REST API.

## Development readiness

The skeleton started on 2026-11-06. The first release of this repository still waits for the [M0 gate](https://github.com/skvorc-dev/FrankenSPO.MiddleTier/issues/1); nothing here is usable before it.

## Build

```bash
scripts/fetch-frankenspo.sh   # downloads and checksum-verifies the FrankenSPO packages named in Directory.Build.props
dotnet build FrankenSPO.MiddleTier.slnx -c Release
dotnet test FrankenSPO.MiddleTier.slnx -c Release --no-build
```

## Contributions

Generic, application-neutral code only, under MIT (see [CONTRIBUTING.md](CONTRIBUTING.md)). Agree the shape in an issue before a large change.

## Examples and documentation

Working shared-domain samples, provider tests, getting-started instructions, language/platform demonstrations and machine-readable supported-feature documentation will be maintained as implementation progresses.

See [planned readiness requirements](docs/READINESS.md), [contributor guidance](CONTRIBUTING.md) and [security policy](SECURITY.md).

Licensed under [MIT](LICENSE).
