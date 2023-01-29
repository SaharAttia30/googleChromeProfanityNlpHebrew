var port = 12345;
var http = require("http");
// var url_ = require("url");
http.createServer(
    function serviceRequest(request, response) {
        // URL   http://localhost:12345/?myString=1,2,3,4,5,6
        // console.log("sooooooo");
        // console.log(request.url);
        // var params = url_.parse(request.url, true);
        // console.log(params.query);
        sentence = [
            'יכלב מה אתה מבלבל בתחת',
            'מזדיין זונה',
            'זין שמנה',
            'תחת',
            'הבן זונה',
            'כמה יגיע?',
            'עלה',
            'מדף',
            'מזדיין בתחת',
            'יכלב מסריח',
            'זונה יפה שלי',
            'יש עלה בתחתית הדף',
            'כוס רטוב ומסריח',
            'כוס תה ממש חם',
            'כלב טוב',
            'כמה אידיוט אתה יכול להיות?'
        ]
        const fs = require('fs');
        var file = fs.createWriteStream('array.txt');
        for(let i = 0; i < sentence.length; i++) {
            let put = sentence[i]+', '+'\n'
            file.write(put)
                // file written successfully
            }
        let {PythonShell} = require('python-shell')
        let options = {
            mode: 'text',
            pythonPath: 'C:\\Users\\sahar\\AppData\\Local\\Microsoft\\WindowsApps\\python.exe',
            pythonOptions: ['-u'], // get print results in real-time
            scriptPath: 'C:\\Users\\sahar\\Desktop\\Array_int_MEAN_Server_GET____PYTHON',                
            args: ['value1', 'value2', 'value3']
        };
        PythonShell.run('try.py', options, function (err, results) {
            if (err) throw err;
                // results is an array consisting of messages collected during execution
            // console.log(results);
            temp1 = results.toString().split('[')
            res = ((temp1[3].split(']'))[0]).split(', ');
            console.log(res)
            console.log(res[1])
        });
    }
).listen(port);

console.log('Server running on port ' + port);


