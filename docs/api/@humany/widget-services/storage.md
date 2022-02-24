# Widget Storage API
The storage API provides: 
- Configuration of which StorageCategories are allowed by the widget, using the [configuration API](orchestration.md#configuration).
- Generic functions to [write](#writing-to-the-storage) and [read](#reading-the-storage) session/local storage and cookies.


## Configuration
!> ACE Knowledge must be installed on your website to have access to the [configuration API](orchestration.md#configuration).

?> Giving consent to usage of certain storage values are typically done using a cookie consent banner or similar. 

To configure which storage values are allowed to be used you can pass a [`StorageConfigurationOptions`](#storageconfigurationoptions) object to the `storage` function.

### `StorageConfigurationOptions`
```ts
type StorageConfigurationOptions = {
    consent?: StorageConsent;
}
```

### `StorageConsent`
```ts
type StorageConsent = number | number[] | StorageCategory | StorageCategory[];
```

### `StorageCategory`
```ts
enum StorageCategory {
    Necessary = 'necessary',
    Functional = 'functional',
    Analytical = 'analytical',
    Marketing = 'marketing',
}
```

### Examples
_Using numbers_
```ts
// Consent to storing necessary (level 1) values.
humany.configure((config) => {
    config.storage({ consent: 1 });
});

// Consent to storing necessary (level 1) and functional (level 2) values.
humany.configure((config) => {
    config.storage({ consent: 2 });
});

// Consent to storing values of all 4 categories.
humany.configure((config) => {
    config.storage({ consent: 4 });
});

// Consent to storing necessary (level 1) and analytical (level 3) values.
humany.configure((config) => {
    config.storage({ consent: [1, 3] });
});
```

_Using strings_
```ts
// Consent to storing necessary (level 1) values.
humany.configure((config) => {
    config.storage({ consent: 'necessary' });
});

// Consent to storing necessary (level 1) and functional (level 2) values.
humany.configure((config) => {
    config.storage({ consent: 'functional' });
});

// Consent to storing values of all 4 categories.
humany.configure((config) => {
    config.storage({ consent: 'marketing' });
});

// Consent to storing necessary (level 1) and analytical (level 3) values.
humany.configure((config) => {
    config.storage({ consent: ['necessary', 'analytical'] });
});
```

## Writing to the storage

?> If you want to persist information across a user session, or across browser tabs, you would either use session storage, local storage or cookies.

To write to the storage you need to create a [`StorageWriter`](#storagewriter) with [`createStorageWriter()`](#createstoragewriter).

### `createStorageWriter()`
Returns a promise of a [`StorageWriter`](#storagewriter) using the passed settings. The created writer can only write using the passed `key`, `category` and `options`.
```ts
createStorageWriter(container: Container, key: string, category: StorageCategory, options?: StorageWriterOptions): Promise<StorageWriter>
```

### `StorageWriter`
Writes to the storage using the `key`, [`category`](#storagecategory), and [`options`](#storagewriteroptions) passed when it was created.
```ts
type StorageWriter = (value?: any) => Promise<void>
```

### `StorageWriterOptions`
```ts
type StorageWriterOptions = {
    medium?: StorageMedium;     // default: StorageMedium.Session
    scope?: StorageScope;       // default: StorageScope.Widget
    duration?: Duration;        // default: { days: 30 }
};
```

### `StorageMedium`
```ts
enum StorageMedium {
    Cookie = 'cookie',
    Local = 'local',
    Session = 'session',
}
```

### `StorageScope`
A value can either be scoped on `'widget'`, `'implementation'` or `'tenant'`.

- If a value is scoped on `'widget'` the value will only be accessible by the widget.
- If a value is scoped on `'implementation'` the value will accessible by all widgets in that implementation.
- If a value is scoped on `'tenant'` the value will accessible by all widgets in the tenant.

```ts
enum StorageScope {
    Tenant = 'tenant',
    Implementation = 'implementation',
    Widget = 'widget',
}
```

### `Duration`
```ts
type Duration = {
    days?: number;
    hours?: number;
    minutes?: number;
    seconds?: number;
};
```

### Examples
_Using promises_
```ts
import { createStorageWriter, StorageCategory, StorageWriter } from '@humany/widget-services';

// Functional session storage value with the key 'current-route' scoped on widget for 30 days.
createStorageWriter(
    container, 
    'current-route', 
    StorageCategory.Functional,
).then((write) => {
    return write('index');
});

// Necessary cookie with the key 'client-id' scoped on tenant for 1 hour.
createStorageWriter(
    container, 
    'client', 
    StorageCategory.Necessary,
    { medium: StorageMedium.Cookie, scope: StorageScope.Tenant, duration: { hours: 1 } },
).then((write) => {
    return write('the-clients-id');
});
```

_Using async/await_
```ts
import { createStorageWriter, StorageCategory, StorageWriter } from '@humany/widget-services';

// Functional session storage value with the key 'current-route' scoped on widget for 30 days.
const storeCurrentRoute = await createStorageWriter(
    container, 
    'current-route', 
    StorageCategory.Functional,
);
await storeCurrentRoute('index');

// Necessary cookie with the key 'client-id' scoped on tenant for 1 hour.
const storeClient = await createStorageWriter(
    container, 
    'client', 
    StorageCategory.Necessary,
    { medium: StorageMedium.Cookie, scope: StorageScope.Tenant, duration: { hours: 1 } },
);
await storeClient('the-clients-id');
```

## Reading the storage

To read the storage you use the [`readStorage()`](#readstorage) function.

### `readStorage()`
Returns a promise of a value stored using the passed `key` and [`medium`](#storagemedium) (default: StorageMedium.Session).
```ts
readStorage<Type>(container: Container, key: string, medium: StorageMedium = StorageMedium.Session): Promise<Type | undefined>
```

### Examples
_Using promises_
```ts
import { readStorage, StorageMedium } from '@humany/widget-services';

// Read stored session value with the key 'current-route'.
readStorage(
    container, 
    'current-route',
).then((value) => {
    console.log('the current route is: ', value);
});

// Read stored cookie with the key 'client-id'.
readStorage(
    container, 
    'client', 
    StorageMedium.Cookie,
).then((value) => {
    console.log('the current client is: ', value);
});
```

_Using async/await_
```ts
import { readStorage, StorageMedium } from '@humany/widget-services';

// Read stored session value with the key 'current-route'.
const value = await readStorage(container, 'current-route');
console.log('the current route is: ', value);

// Read stored cookie with the key 'client-id'.
const value = await readStorage(container, 'client', StorageMedium.Cookie);
console.log('the current client is: ', value);
```