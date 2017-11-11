'use strict';

window.addEventListener('load', () => {
  var replaceTextInNode = function(parentNode){
    for(var i = parentNode.childNodes.length-1; i >= 0; i--){
      var node = parentNode.childNodes[i];

      //  Make sure this is a text node

      if(node.nodeType == Element.TEXT_NODE){
        node.textContent = node.textContent.replace(/\ i\ /g, ' A [?] ');
      } else if(node.nodeType == Element.ELEMENT_NODE){
        //  Check this node's child nodes for text nodes to act on

        replaceTextInNode(node);
      }
    }

    setTimeout(replaceTextInNode, 1000, parentNode);
  };

  replaceTextInNode(document.body);
});
