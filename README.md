hash-tag-replacer
=================

A naive approach to hypertext tags (or anything). It is a way to move some of the processing time by the _server away to the _client_.

 Hash-tag-replacer will replace any string that looks like `howItLooksLike` in `whereToSearch` with a hybertext
 
 `whereToSearch` accepts `HtmlTag{#,.}Label`.

 
`howItLooksLike` accepts regex

`site` the site name. The site must finish with a slash, unlese `pre_tag` is a slash.

`pre_tag` what to include before the hybertext

`post_tag` what to include after the hybertext

