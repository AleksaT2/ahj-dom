export default class GamePlay {
  constructor(fields) {
    this.fields = fields;
    this.size = 4;
    this.board = null;
    this.position = 0;
  }

  init() {
    this.board = this.fields.createField()
    this.start();
  }

  changePosition () {
    const position = Math.floor(Math.random() * this.size ** 2);
    this.deletePosition(this.position);
    if (position === this.position) {
      this.changePosition();
      return;
    }
    else {
      this.board.children[position].classList.add('goblin');
      this.position = position;      
    }
  }

  deletePosition (position) {
    this.board.children[position].classList.remove('goblin');
  }

  start() {
    setInterval(() => {
      this.changePosition();
    }, 1000);
  }
}