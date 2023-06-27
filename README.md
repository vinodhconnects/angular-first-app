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

## Component Directive
   
     The custom elements that we create in angular are called
     as component directives

     infact every component that we create is a component directive

## Structural Directive

     Structural directives generates template[html], hides or unhides template
     [html]

     Structural directives must be prefixed with asterisk (*)

     There are few inbuilt structural directives , we can also create custom
     structural directives

     some inbuilt structural directives include  ngFor,ngIf, ngSwitch

## attribute directives

     attribute directives are custom attributes that are applied
     on target elements

     these direcives changes the behaviour or listens to the behaviour
     of target elements

     these attributes are further classified into three kinds

     * input directives
     * output directives
     * input output directives

   ### input directives

   input directives receives value from the right
   the change the behaviour of the target element
   in general, input directives are enclosed within []

   some inbuilt input directives are

```
          ngClass,ngStyle, style, routerLink

```

example 

```
            <div [ngClass]="temp"></div>

                in the above example    

                div is the target element
                ngClass is the input directive
                it looks for value of variable temp

            <div ngClass="temp"></div>

                  this is also valid, in this case
                  temp is a string and it is direct
                  value for ngClass  

            <div  [ngClass]="'temp'"></div>   

```

         
         
### output Directives

Output directives are event listeners

output directives are enclosed within ()  parethesis

Generally upon the appropriate that the directive represents
the function mentioned in the right side gets called

```
    <button (click)="callIt()" > </button>

     in this above example click is output directive , on clicking
     the buttong callit will be called

     all the events are output directives
```