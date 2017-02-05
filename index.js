(function (doc) {
  function unblockDOM (dom) {
    dom.oncontextmenu = null;
    dom.onselectstart = null;
  }
  function unblockIFrames (doc) {
    const iframes = doc.getElementsByTagName('iframe');
    Array.from(iframes).forEach(function (iframe) {
      try {
        const iframeDoc = iframe.contentDocument;
        unblockDocument(iframeDoc);
      } catch (e) {}
    });
  }
  function unblockDocument (doc) {
    unblockDOM(doc);
    unblockIFrames(doc);
    const allElements = doc.getElementsByTagName('*');
    Array.from(allElements).forEach(unblockDOM);
  }
  unblockDocument(doc);
})(document);