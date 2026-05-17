function openExternalLink(url){
  // Intentar abrir en nueva pestaña
  var newWindow = window.open(url, '_blank', 'noopener,noreferrer');
  
  if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
    // Si no se puede abrir, mostrar la URL claramente
    alert('No se pudo abrir automáticamente. Copia esta URL y pégala en tu navegador:\n\n' + url);
    
    // Intentar copiar al portapapeles
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(url).then(function() {
        showToast('🔗 URL copiada al portapapeles');
      }).catch(function(err) {
        console.error('Error al copiar:', err);
        showToast('🔗 URL: ' + url.substring(0, 50) + '...');
      });
    } else {
      // Método alternativo para copiar
      var textArea = document.createElement("textarea");
      textArea.value = url;
      textArea.style.position = "fixed";
      textArea.style.left = "-9999px";
      document.body.appendChild(textArea);
      textArea.select();
      
      try {
        document.execCommand('copy');
        showToast('🔗 URL copiada al portapapeles');
      } catch (err) {
        showToast('🔗 URL: ' + url.substring(0, 50) + '...');
      }
      
      document.body.removeChild(textArea);
    }
  } else {
    showToast('🔗 Abriendo enlace...');
  }
}
