




fs.unlink('writeme.txt', (err) => { if (err) throw err; console.log('writeme.txt was deleted'); });
fs.rename('readme.txt', 'leeme.txt', (err) => {
    if (err) throw err;
    console.log('name edited');
});
fs.stat('leeme.txt', (err, stat) => {
    if (err) throw err;
    console.log(stats);
});