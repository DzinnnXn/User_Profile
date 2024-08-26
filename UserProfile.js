function toggleEdit(fieldId) {
    const inputField = document.getElementById(fieldId);
    const isDisabled = inputField.disabled;
    
    if (isDisabled) {
        inputField.disabled = false;
        inputField.focus();
    } else {
        inputField.disabled = true;
        // Aqui você pode adicionar código para salvar o valor, se necessário
        // Por exemplo, enviar para um servidor ou armazenar localmente
        console.log(`Valor do campo ${fieldId} salvo:`, inputField.value);
    }
}
