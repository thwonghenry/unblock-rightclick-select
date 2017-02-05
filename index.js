((parentDoc) => {
  const unblockDOM = (dom) => {
    dom.oncontextmenu = null;
    dom.onselectstart = null;
  };
  const unblockIFrames = (doc) => {
    const iframes = doc.getElementsByTagName('iframe');
    Array.from(iframes).forEach((iframe) => {
      try {
        const iframeDoc = iframe.contentDocument;
        unblockDocument(iframeDoc);
      } catch (e) {}
    });
  };
  const unblockDocument = (doc) => {
    unblockDOM(doc);
    unblockIFrames(doc);
    const allElements = doc.getElementsByTagName('*');
    Array.from(allElements).forEach(unblockDOM);
  };
  unblockDocument(parentDoc);
})(document);