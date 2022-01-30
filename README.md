# Get version number from package.json
This GitHub action gets the version number from a package.json.

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