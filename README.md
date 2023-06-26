# Directives

   Directives are custom html elements and attributes that
   are created using angular 
```
   <app-box><app-box>
   <h1 store="sample">
```


in the above example, app-box is a custom element , store is a custom
attribute

There are three kinds of directives in angular

* Component directive
* Structural Directive
* Attribute directive

* Component Directive
   
     The custom elements that we create in angular are called
     as component directives

     infact every component that we create is a component directive

* Structural Directive

     Structural directives generates template[html], hides or unhides template
     [html]

     Structural directives must be prefixed with asterisk (*)

     There are few inbuilt structural directives , we can also create custom
     structural directives

     some inbuilt structural directives include  ngFor,ngIf, ngSwitch

     