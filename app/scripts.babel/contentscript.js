'use strict';

window.addEventListener('load', () => {
  var replaceTextInNode = function(parentNode){
    for(var i = parentNode.childNodes.length-1; i >= 0; i--){
      var node = parentNode.childNodes[i];

      //  Make sure this is a text node

      if(node.nodeType == Element.TEXT_NODE){
        node.textContent = node.textContent.replace(/\ i\ /g, ' A [?] ');
        if(node.textContent.charAt(0) == 'i') {
          node.textContent = node.textContent.replace(/i/, 'A [?]');
        }
        if(node.textContent.charAt(node.textContent.length - 1) == 'i') {
          node.textContent = node.textContent.substring(0, node.textContent.length - 2);
          node.textContent = node.textContent + 'A [?]';
        }
      } else if(node.nodeType == Element.ELEMENT_NODE){
        //  Check this node's child nodes for text nodes to act on

        replaceTextInNode(node);
      }
    }

    setTimeout(replaceTextInNode, 5000, parentNode);
  };

  replaceTextInNode(document.body);
});

String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}
