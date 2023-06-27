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

### Input output directive

   It does the job of both input and output directive
   it is enclosed withing [()]

   there is only one popularly know input output directive
   called as ngModel

   usually it is used along with form Elements

```
     <input type="text" [(ngModel)]="name">

     in the above example, if name has a value say "Rahul", it will be
     filled in the text box and if you fill "Ravi" in the text box
     it will be stored in the variable name

```

## Parent child communication

  * Sending data from parent to child
  * communicating form child to parent

### Parent to child communication

Whether it is parent to child or child to parent communication
in both the cases we deal the problem with respect to child

in case 1, child is receiver
in case 2 , child is the communicatio

since child is the receiver we must have varaibles ready to receive
the value from the parent and those variables must be decorated with a
decorator called @Input

```
@Input title:string=""

in the above case, title is decorated with @Input and hence
title becomes an input diretive and the target of this
directive is only the component in which this @Input decorator
is defined,

for example, if the component app-box

we can use

<app-box [title]="data"></app-box>

Note: alias can also be used for @Input

@Input('btitle') title:string=""


<app-box [btitle]="x"></app-box>

```