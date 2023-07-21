function openFile() {
    var file = {
        fileContent: "Hello Rasik", 
        fileName: "example.txt", 
        fileSize: 24, 
        mimeType: "text/plain"
    }

    Xrm.Navigation.openFile(file, 2);
}