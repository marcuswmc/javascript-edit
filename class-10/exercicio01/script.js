const dynamicHtml = document.createElement('div')
document.body.append(dynamicHtml)

dynamicHtml.innerHTML = `<ul>
<li>Exemplo 01</li>
<li>Exemplo02</li>
</ul>
<p>isto é uma div</p>`

const newLi = document.querySelector('li')
newLi.insertAdjacentHTML('afterend', '<li>New LI</li>')

const removeTag = document.querySelector('p')
removeTag.remove()


