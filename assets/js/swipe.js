// let btn = document.getElementById('test');
// let goBack = document.getElementById('liv-back-button');

// btn.addEventListener('click', showItemView);
// goBack.addEventListener('click', hideItemView);

// function showItemView() {
//   let view = document.getElementsByTagName('list-view')[0];
//   let item = document.getElementsByTagName('list-item-view')[0];

//   view.classList.add('view-hide');
//   item.classList.add('item-show');
// }

// function hideItemView() {
//   let view = document.getElementsByTagName('list-view')[0];
//   let item = document.getElementsByTagName('list-item-view')[0];

//   view.classList.remove('view-hide');
//   item.classList.remove('item-show');
// }

class Swipe {
  map;

  constructor(parent, title, date, items) {
    this.parent = parent;
    this.title = title;
    this.date = date;
    this.items = items;
    this.map;
  }

  create() {
    let main = document.createElement('main-element');
    main.appendChild(this.#createTimelineList());
    main.appendChild(this.#createTimelineMap());

    this.parent.appendChild(main);
  }

  #createTimelineMap() {
    let timelineMap = document.createElement('timeline-map');
    return timelineMap;
  }

  #createTimelineList() {
    let timelineList = document.createElement('timeline-list');
    this.#createTimelineListHeader(timelineList);

    return timelineList;
  }

  #createTimelineListHeader(timelineList) {
    let listView = document.createElement('list-view');
    let lvHeader = this.#createClassedElement('div', ['lv-header']);
    let lvhMain = this.#createClassedElement('div', ['lvh-main']);

    let topRow = this.#createClassedElement('div', ['top-row']);
    let breadcrumb = this.#createClassedElement('ul', ['breadcrumb']);
    let jb = document.createElement('li');
    jb.textContent = 'James Bond';
    breadcrumb.appendChild(jb);
    let ian = document.createElement('li');
    ian.textContent = 'Ian Fleming';
    breadcrumb.appendChild(ian);
    let book = document.createElement('li');
    book.textContent = this.title;
    breadcrumb.appendChild(book);
    topRow.appendChild(breadcrumb);

    let title = this.#createClassedElement('h1', ['lv-title']);
    title.textContent = this.title;
    let timeframe = this.#createClassedElement('p', ['timeframe']);
    timeframe.textContent = this.date;

    lvhMain.appendChild(topRow);
    lvhMain.appendChild(title);
    lvhMain.appendChild(timeframe);

    lvHeader.appendChild(lvhMain);

    listView.appendChild(lvHeader);

    this.items.forEach((i) => {
      listView.appendChild(this.#createListItem(i));
    });

    timelineList.appendChild(listView);
  }

  #createListItem(item) {
    let li = document.createElement('list-item');

    if (item.isTime) {
      li.classList.add('time');
      let div = document.createElement('div');
      div.textContent = item.background;
      li.appendChild(div);
    } else {
      if (item.image) {
        let image = this.#createClassedElement('div', ['image']);
        let picture = document.createElement('picture');
        let img = document.createElement('img');
        img.src = item.image;
        picture.appendChild(img);
        image.appendChild(picture);
        li.appendChild(image);
      }

      let content = this.#createClassedElement('div', ['content']);
      let info = this.#createClassedElement('div', ['info']);
      let h2 = document.createElement('h2');
      h2.textContent = item.title;
      info.appendChild(h2);
      let p = document.createElement('p');
      p.textContent = item.background;
      info.appendChild(p);

      content.appendChild(info);

      li.appendChild(content);
    }

    return li;
  }

  #createClassedElement(tag, classes) {
    let element = document.createElement(tag);

    classes.forEach((c) => {
      element.classList.add(c);
    });

    return element;
  }
}
