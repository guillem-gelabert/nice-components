# nice-components
Collection of nice reusable React components

---

## Input Field

A11y compliant text input component with animated labels

![](https://media.giphy.com/media/9rci4Gzsv6ioynbHu5/giphy.gif)

### Usage

```javascript
<FormInput text="Email" id="email" onChange={handleChange} autocomplete />
<FormInput text="Password" id="password" onChange={handleChange} password />
```

### Props

- `text`: is the label name, it is also used as placeholder.
- `id`: is the unique identifier of the input field and is also used as `for` attribute of the label.
- `onChange`
- `password`: hides input if present.
- `autocomplete`: is disabled by default.

---

## Tabs

Compound component to create Tab views

### Usage

```javascript
<Tabs>
  <Tabs.List>
    <Tabs.Tab>Sign Up</Tabs.Tab>
    <Tabs.Tab>Sign In</Tabs.Tab>
  </Tabs.List>
  <Tabs.Panels>
    <Tabs.Panel>
      <div> I am the sign up tab </div>
    </Tabs.Panel>
    <Tabs.Panel>
      <div> I am the sign in tab </div>
    </Tabs.Panel>
  </Tabs.Panels>
</Tabs>
```

- Note that `Tabs.List` should have as many children as `Tabs.Panel`.
