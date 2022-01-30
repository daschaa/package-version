# Get version number from package.json
This GitHub action gets the version number from a package.json.

![Current version](https://img.shields.io/github/v/tag/daschaa/package-version)
![MIT License](https://img.shields.io/github/license/daschaa/package-version)

## Usage

```yml
on: [push]

jobs:
  test-package-version:
    runs-on: ubuntu-latest
    name: Get package version
    steps:
      - name: Checkout
        uses: actions/checkout@v2
      - name: Get package version
        id: get_version
        uses: daschaa/package-version@v1.1.0
        with:
          path: './package.json'
      - name: Output package version
        run: echo "The package version is ${{ steps.get_version.outputs.current-version }}"
```

## Supported Parameters

| Parameter               | Description                                                | Default  |
| ----------------------- | ---------------------------------------------------------- | -------- |
| `path`                  | Path to package.json                                       | `package.json`   |

## Outputs

The following output values can be accessed via `${{ steps.<step-id>.outputs.<output-name> }}`:

| Name                     | Description                                            | Type   |
| ------------------------ | ------------------------------------------------------ | ------ |
| `current-version`        | The version number extracted from the package.json     | string |

## License

The source code for this project is released under the [MIT License](/LICENSE). This project is not associated with GitHub.