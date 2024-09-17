// listener.js (Renderer Process)
document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById("main-screen-button");
  const field = document.getElementById('text-zone-for-assistant');

  button.addEventListener('click', async () => {
    field.textContent = 'bober';
    try {
      const output = await window.api.runPythonScript('..\python_scripts\app.py');
      field.textContent = output;
    } catch (error) {
      console.error('Error:', error);
    }
  });
});
