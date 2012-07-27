// Where to search in your HTML.
// p.reply means to search for tags in <p class="reply"> </p>
var whereToSearch = 'p.reply';

// How the tag looks like.
// '\\#[A-Za-z0-9_]+' means to accept A-Z, a-z, 0-9, and _
var howItLooksLike = '\\#[A-Za-z0-9_]+';

// Your site URL
var site = "http://website.com/";

// What to append the tag to. 
var pre_tag = '';

// What to follow the tag with.
var post_tag = '';

// ----------------
// Nothing to change here
$(whereToSearch).each(function() {
    var tag_regex = new RegExp(howItLooksLike, 'g');
    var tag;

    while ((tag = tag_regex.exec($(this).text())) !== null) {
        tag = tag + '';
        $(this).html($(this).html().replace(tag, '<a href="' + site + pre_tag + tag.replace('#', '') + post_tag + '">' + tag + '</a>'));
    }
});​