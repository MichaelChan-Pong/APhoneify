'use strict';

window.addEventListener('load', () => {
  var replaceTextInNode = function(parentNode, root){
    for(var i = parentNode.childNodes.length-1; i >= 0; i--){
      var node = parentNode.childNodes[i];

      //  Make sure this is a text node

      if(node.nodeType == Element.TEXT_NODE){
        node.textContent = node.textContent.replace(/\Wi\W/g, ' A [?] ');
        if(node.textContent.substring(0, 2).match(/i\W/)) {
          node.textContent = node.textContent.replace(/i/, 'A [?]');
        }
        if(node.textContent.substring(node.textContent.length - 2, node.textContent.length).match(/ i/)) {
          node.textContent = node.textContent.substring(0, node.textContent.length - 1);
          node.textContent = node.textContent + 'A [?]';
        }

        node.textContent = node.textContent.replace(/\WI\W/g, ' A [?] ');
        if(node.textContent.substring(0, 2).match(/I\W/)) {
          node.textContent = node.textContent.replace(/I/, 'A [?]');
        }
        if(node.textContent.substring(node.textContent.length - 2, node.textContent.length).match(/ I/)) {
          node.textContent = node.textContent.substring(0, node.textContent.length - 1);
          node.textContent = node.textContent + 'A [?]';
        }
      } else if(node.nodeType == Element.ELEMENT_NODE){
        //  Check this node's child nodes for text nodes to act on

        replaceTextInNode(node, false);
      }
    }

    if(root) {
      setTimeout(replaceTextInNode, 5000, document.body, true);
    }

  };

  replaceTextInNode(document.body, true);
});
