# RemoteDataTS

**RemoteData** models remote data state.

## Installation

```sh
npm install @arthurgubaidullin/remote-data-ts --save
```

## Usage

```ts
import * as RemoteData from "@arthurgubaidullin/remote-data-ts";
import { type RemoteData } from "@arthurgubaidullin/remote-data-ts";

type Todo = {
  content: string;
};

let state: RemoteData<Todo, Error> = RemoteData.initial();

state = RemoteData.pending();

state = RemoteData.ok({ content: "Eat cookies!" });

state = RemoteData.error(new Error("No cookies!"));
```

## License

Copyright (c) Artur Gubaidullin. All rights reserved.

Licensed under the [MIT](LICENSE) license.
