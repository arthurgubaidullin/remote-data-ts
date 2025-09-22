# RemoteDataTS

**RemoteData** models remote data state.

## Installation

```sh
npm install @arthurgubaidullin/remote-data-ts --save
```

## Usage

```ts
import * as RD from "@arthurgubaidullin/remote-data-ts";

type Todo = {
  content: string;
};

let state: RD.RemoteData<Todo, Error> = RD.initial();

if (RD.isInitial(state) || RD.isError(state) || RD.isOk(state)) {
  state = RD.pending();
}

if (RD.isPending(state)) {
  state = RD.ok({ content: "Eat cookies!" });
}

if (RD.isPending(state)) {
  state = RD.error(new Error("No cookies!"));
}
```

## License

Copyright (c) Artur Gubaidullin. All rights reserved.

Licensed under the [MIT](LICENSE) license.
