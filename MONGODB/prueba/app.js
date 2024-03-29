// we load moongose
const mongoose = require('mongoose');
// establecemos el motor de promesa predeterminado en javascript
// esto es necesario porque mongo admite diferentes tipos de promesas
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

//conexión
mongoose.connect('mongodb://localhost:27017/prueba', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => { console.log('connected') })
    .catch((err) => { console.log('error al conectarse a la bbdd ') })



const personSchema = Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    age: Number,
    stories: [{ type: Schema.Types.ObjectId, ref: 'Story' }]
});

const storySchema = Schema({
    author: { type: Schema.Types.ObjectId, ref: 'Person' },
    title: String,
    fans: [{ type: Schema.Types.ObjectId, ref: 'Person' }]
});

const Story = mongoose.model('Story', storySchema);
const Person = mongoose.model('Person', personSchema);


const author = new Person({
    _id: new mongoose.Types.ObjectId(),
    name: 'Ian Fleming',
    age: 50
  });
  
  author.save(function (err) {
    if (err) return handleError(err);
  
    const story1 = new Story({
      title: 'Casino Royale',
      author: author._id    // assign the _id from the person
    });
  
    story1.save(function (err) {
      if (err) return handleError(err);
      // that's it!
    });
  });

  Story.findOne({ title: 'Casino Royale' }).
  populate('author').
  exec(function (err, story) {
    if (err) return handleError(err);
    console.log('The author is %s', story.author.name);
    // prints "The author is Ian Fleming"
  });

