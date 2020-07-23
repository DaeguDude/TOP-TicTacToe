# DEV LOG

This is a developing log for making a Tic-Tac-Toe game. The reasons for making this is I've kind of felt that without actually writing down what's going on, there is no direction for me where I'm actually heading with this and the problems that I need to resolve.

## 07/23

I don't think I am understanding how 'module' actually works. If you look at my code, I am calling other module's method inside another module.

### Example

```javascript
const displayController = (function() {
const enableBoardClick = () => {
    // This will enable the gameBoard to be clicked, and it will return
    // the div element that was clicked
    for(i = 0; i < gameBoard.children.length; i++) {
      let div = gameBoard.children[i];
      div.addEventListener('click', (event) => {
        placeMarker(div, game.getCurrentPlayer().getMarker());
        game.increaseGameCount();
      })
    }
  }
})();  
```

Is this relevant? I have to find out.

> I like to treat modules as closed entities. Meaning, they reside within themseleves and nothing more is needed for them to exist.

How can I make sure of this? When I need a DOM object, like requesting HTML element, how will I make sure my module can get HTML element without actually being dependent on other object?

There is a great article about this: [Declaring module dependencies](https://dev.to/tomekbuszewski/module-pattern-in-javascript-56jm)

### After all...

I guess I will checkout this [modular javascript videos](https://www.youtube.com/playlist?list=PLoYCgNOIyGABs-wDaaxChu82q_xQgUb4f) to get deeper understanding of how module design actually works.

## How does IIFE actually work?

Modular Javascript #3: [1:58](https://youtu.be/pOfwp6VlnlM?list=PLoYCgNOIyGABs-wDaaxChu82q_xQgUb4f&t=118)

## What to pass on addEventListener?

Modular Javascript #2: [12:24](https://youtu.be/m-NYyst_tiY?list=PLoYCgNOIyGABs-wDaaxChu82q_xQgUb4f&t=744)

## What can I do for the module being dependent on other modules' methods?

### Pubsub

- [Modular Javascript #4](https://www.youtube.com/watch?v=nQRXi1SVOow&list=PLoYCgNOIyGABs-wDaaxChu82q_xQgUb4f&index=4)
- [Modular Javascript #5](https://www.youtube.com/watch?v=jDhDvnlbr4Q&list=PLoYCgNOIyGABs-wDaaxChu82q_xQgUb4f&index=5)
- [Code about PubSub Design Pattern](https://gist.github.com/learncodeacademy/777349747d8382bfb722)




