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
- zustand is used for shared state between components


Project structure is like this:
- `/app` - Main React Router application
    - `/assets` - Static assets like images
    - `/components` - Reusable React components
    - `/DB` - Data and database-related code
    - `/layouts` - Layout components
    - `/lib` - Utility functions and constants
    - `/routes` - Route components and logic
    - `/[route-name]` - Feature-based route folder
        - `[route-name].tsx` - Main route component
        - `/components` - Route-specific components
            - `component1.tsx` - Individual components
            - `component2.tsx` - Individual components
        - `/layout` - Route-specific layout components
            - `layout1.tsx` - Layout components
            - `/nav` - Navigation related components
                - `nav1.tsx` - Navigation components
        - `/stores` - Route-specific state management
            - `store1.ts` - Zustand store files
    - `/styles` - CSS and styling files
    - `app.css` - Global styles
    - `root.tsx` - Root application component
    - `routes.ts` - Route definitions
    - `use-key-press.ts` - Keyboard input hook