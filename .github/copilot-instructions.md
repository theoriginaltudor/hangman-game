- React Router 7 framework project (It's the same as Remix.Js but a newer version, so remix.js code will work as well)
- using typescript and types so don't forget to add them
- code is indented with 2 spaces
- components are always typed like this:
```ts
type Props = {
  //properties here
}
export const ComponentName:FC<Props> = ({/*here enumerate the props*/}) => {
  //hooks

  //functions

  return (
    //html here
  )
}
```
- always use lambda functions over regular functions
- we use tailwind for styling