function getFirstSelector(selector) {
  return document.getElementById('app').querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll(`.ranked-list`)
  for(let i = 0; i < rankedLists.length; i++) {
    var childs = rankedLists[i].children

    for(let j =0; j < childs.length; j++) {
      childs[j].innerHTML = (parseInt(childs[j].innerHTML) + n).toString() 
    }
  }
}

function deepestChild() {
  let node = document.getElementById('grand-node')
  let next = node.children[0]

  while(next) {
    node = next
    next = node.children[0]
  }
  return node
}