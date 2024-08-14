function runPythonScript() {
    // Get the path to the Python script.
    var pythonScriptPath = "../python-scripts/app.py";
    // Run the Python script.
    subprocess.run(["python", pythonScriptPath]);
  }