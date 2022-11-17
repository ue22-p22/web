---
celltoolbar: Slideshow
jupytext:
  cell_metadata_filter: all,-hidden,-heading_collapsed,-run_control,-trusted
  formats: md:myst
  notebook_metadata_filter: all,-language_info,-toc,-jupytext.text_representation.jupytext_version,-jupytext.text_representation.format_version
  text_representation:
    extension: .md
    format_name: myst
kernelspec:
  display_name: JavaScript (Node.js)
  language: javascript
  name: javascript
nbhosting:
  title: 'practice: your resume'
rise:
  autolaunch: true
  slideNumber: c/t
  start_slideshow_at: selected
  theme: sky
  transition: cube
---

<div class="licence">
<span>Licence CC BY-NC-ND</span>
<span>Thierry Parmentelat</span>
</div>

+++ {"slideshow": {"slide_type": ""}}

## Qu'est-ce que Chrome ?

+++

1. Un navigateur
1. Un front-end
1. Un client
1. Les trois réponses ci-dessus

+++ {"slideshow": {"slide_type": "slide"}}

## Où sont aujourd'hui hébergés la plupart des serveurs Internet des sites grand-public?

+++

1. Chez SFR
1. Dans le cloud
1. A la FNAC
1. Aux Mines de Paris

+++ {"slideshow": {"slide_type": "slide"}}

## Comment appelle-t-on les architectures qui permettent à deux clients internet d'échanger des informations directement sans passer par un serveur ?

+++

1. Bout-en-bout
1. Pas-à-pas
1. Pair-à-pair
1. Les trois réponses ci-dessus

+++ {"slideshow": {"slide_type": "slide"}}

## Quel langage *n'est pas* typiquement utilisé pour coder un front-end ?

+++

1. HTML
1. Java
1. CSS
1. Javascript

+++ {"slideshow": {"slide_type": "slide"}}

## Pourriez-vous associer les responsabilités aux bonnes couches ?

+++

| - | Contenu | Présentation | Comportement |
| --- | --- | --- | --- |
| 1. | CSS | HTML| Javascript |
| 2. | HTML | CSS | Javascript |
| 3. | HTML | Javascript | CSS |
| 4. | Javascript| CSS | HTML |

+++ {"slideshow": {"slide_type": "slide"}}

## Qu'est-ce qu'un DOM

+++

1. Les Départements d'Outre-Mer
1. Le Document Object Model
1. Les tags du document HTML sous forme d'arborescence
1. Les trois réponses ci-dessus

+++ {"slideshow": {"slide_type": "slide"}}

## Quels tags seront obligatoirement présents dans un document HTML ?

+++

1. `<html>`
1. `<head>`
1. `<body>`
1. `<link>`

+++ {"slideshow": {"slide_type": "slide"}}

## Que peut-on mettre dans le contenu d'un &lt;p&gt; ?

+++

1. des `<br>`;
1. des `<h2>`;
1. des [`<ul>`](https://stackoverflow.com/questions/5681481/should-ol-ul-be-inside-p-or-outside#answer-5681796)
1. des `<b>`;

+++ {"slideshow": {"slide_type": "slide"}}

## Dans `<a href="https://www.inria.fr">Aller à l'INRIA</a>`, qu'est-ce que `href` par rapport au `a` ?

+++

1. href est un attribut du tag a
1. href est le contenu du tag a
1. href est le tag de l'attribut a
1. Aucune des réponses précédentes

+++ {"slideshow": {"slide_type": "slide"}}

## Parmi les pratiques suivantes, laquelle devriez-vous chercher à appliquer en CSS ?

+++

1. Préférer `<b>` à `<strong>`
1. Donner des noms aux classes qui décrivent comment leur contenu s'affiche
1. Donner des noms aux classes qui réprésentent ce que leur contenu est
1. L'existence précède l'essence

+++ {"slideshow": {"slide_type": "slide"}}

## Quel sélecteur CSS permet de cibler l'élément ayant l'id "id-unique" ?

+++

1. `#id-unique { ...`
1. `.id-unique { ...`
1. `id-unique { ...`
1. `@id-unique {...`

+++ {"slideshow": {"slide_type": "slide"}}

## Quel sélecteur CSS permet de cibler tous les éléments ayant comme classe "important" ?

+++

1. `#important { ...`
1. `.important { ...`
1. `important { ...`
1. `@important { ...`

+++ {"slideshow": {"slide_type": "slide"}}

## Quel sélecteur CSS permet de cibler tous les paragraphes ?

+++

1. `#p {...`
1. `.p {...`
1. `p {...`
1. `@p { ...`

+++ {"slideshow": {"slide_type": "slide"}}

## Quel sélecteur CSS permet de cibler tous les paragraphes ?

+++

1. `html body {...`
1. `* {...`
1. `p {...`
1. Tous les sélecteurs ci-dessus 

+++ {"slideshow": {"slide_type": "slide"}}

## Quel sélecteur CSS permet de cibler les paragraphes ayant les deux classes "important" et "super-important" ?

+++

1. `p.important p.super-important`
1. `p.important.super-important`
1. `p important super-important`
1. Aucun des sélecteurs ci-dessus

+++ {"slideshow": {"slide_type": "slide"}}

## Comment un sélecteur peut-il cibler les paragraphes de classe "important" en même temps que les paragraphes de classe "super-important" ?

+++

1. `p.important p.super-important`
1. `p.important.super-important`
1. `p important super-important`
1. Aucun des sélecteurs ci-dessus
