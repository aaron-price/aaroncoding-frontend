'use strict';

function normal_cookie(signed_cookie) {
    var dot = signed_cookie.indexOf('.');
    return signed_cookie.slice(2, dot);
}

// Some URIs end with a .com which conflicts with the signed_cookie syntax
function URI_cookie(signed_cookie) {
    // If you have a uri with a different TLD, add it here
    // Keep array as small as possible to protect against false positives
    var tlds = ['.com'];
    for (var i = 0; i < tlds.length; i++) {
        var tld = tlds[i];
        var end = signed_cookie.indexOf(tld);
        if (end !== -1) {
            return signed_cookie.slice(2, end + tld.length);
        }
    }

    // If none were found
    return normal_cookie(signed_cookie);
}

function get_cookie(cname) {
    var name = cname + '=';
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            var signed_cookie = c.substring(name.length, c.length);

            if (cname.indexOf('URI') === -1) {
                return normal_cookie(signed_cookie);
            } else {
                return URI_cookie(signed_cookie);
            }

            var dot = signed_cookie.indexOf('.');
            return signed_cookie.slice(2, dot);
        }
    }
    return '';
}

module.exports = { get_cookie: get_cookie };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2dldF9jb29raWUuanMiXSwibmFtZXMiOlsibm9ybWFsX2Nvb2tpZSIsInNpZ25lZF9jb29raWUiLCJkb3QiLCJpbmRleE9mIiwic2xpY2UiLCJVUklfY29va2llIiwidGxkcyIsImkiLCJsZW5ndGgiLCJ0bGQiLCJlbmQiLCJnZXRfY29va2llIiwiY25hbWUiLCJuYW1lIiwiZGVjb2RlZENvb2tpZSIsImRlY29kZVVSSUNvbXBvbmVudCIsImRvY3VtZW50IiwiY29va2llIiwiY2EiLCJzcGxpdCIsImMiLCJjaGFyQXQiLCJzdWJzdHJpbmciLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOztBQUFBLFNBQVMsQUFBVCxjQUF1QixBQUF2QixlQUFzQyxBQUNsQztRQUFJLE1BQU0sY0FBYyxBQUFkLFFBQXNCLEFBQXRCLEFBQVYsQUFDQTtXQUFPLGNBQWMsQUFBZCxNQUFvQixBQUFwQixHQUF1QixBQUF2QixBQUFQLEFBQ0g7OztBQUVEO0FBQ0EsU0FBUyxBQUFULFdBQW9CLEFBQXBCLGVBQW1DLEFBQy9CO0FBQ0E7QUFDQTtRQUFJLE9BQU8sQ0FBQyxBQUFELEFBQVgsQUFDQTtTQUFJLElBQUksSUFBSSxBQUFaLEdBQWUsSUFBSSxLQUFLLEFBQXhCLFFBQWdDLEFBQWhDLEtBQXFDLEFBQ2pDO1lBQUksTUFBTSxLQUFLLEFBQUwsQUFBVixBQUNBO1lBQUksTUFBTSxjQUFjLEFBQWQsUUFBc0IsQUFBdEIsQUFBVixBQUNBO1lBQUksUUFBUSxDQUFDLEFBQWIsR0FBZ0IsQUFDWjttQkFBTyxjQUFjLEFBQWQsTUFBb0IsQUFBcEIsR0FBdUIsTUFBTSxJQUFJLEFBQWpDLEFBQVAsQUFDSDtBQUNKO0FBRUQ7O0FBQ0E7V0FBTyxjQUFjLEFBQWQsQUFBUCxBQUNIOzs7QUFFRCxTQUFTLEFBQVQsV0FBb0IsQUFBcEIsT0FBMkIsQUFDdkI7UUFBSSxPQUFPLFFBQVEsQUFBbkIsQUFDQTtRQUFJLGdCQUFnQixtQkFBbUIsU0FBUyxBQUE1QixBQUFwQixBQUNBO1FBQUksS0FBSyxjQUFjLEFBQWQsTUFBb0IsQUFBcEIsQUFBVCxBQUNBO1NBQUksSUFBSSxJQUFJLEFBQVosR0FBZSxJQUFJLEdBQUcsQUFBdEIsUUFBOEIsQUFBOUIsS0FBbUMsQUFDOUI7WUFBSSxJQUFJLEdBQUcsQUFBSCxBQUFSLEFBQ0E7ZUFBTyxFQUFFLEFBQUYsT0FBUyxBQUFULE1BQWUsQUFBdEIsS0FBMkIsQUFDekI7Z0JBQUksRUFBRSxBQUFGLFVBQVksQUFBWixBQUFKLEFBQ0g7QUFDQztZQUFJLEVBQUUsQUFBRixRQUFVLEFBQVYsU0FBbUIsQUFBdkIsR0FBMEIsQUFDOUI7Z0JBQUksZ0JBQWdCLEVBQUUsQUFBRixVQUFZLEtBQUssQUFBakIsUUFBeUIsRUFBRSxBQUEzQixBQUFwQixBQUVLOztnQkFBSSxNQUFNLEFBQU4sUUFBYyxBQUFkLFdBQXlCLENBQUMsQUFBOUIsR0FBaUMsQUFDN0I7dUJBQU8sY0FBYyxBQUFkLEFBQVAsQUFDSDtBQUZELG1CQUVPLEFBQ0g7dUJBQU8sV0FBVyxBQUFYLEFBQVAsQUFDSDtBQUVOOztnQkFBSSxNQUFNLGNBQWMsQUFBZCxRQUFzQixBQUF0QixBQUFWLEFBQ0E7bUJBQU8sY0FBYyxBQUFkLE1BQW9CLEFBQXBCLEdBQXVCLEFBQXZCLEFBQVAsQUFDRDtBQUNGO0FBQ0U7V0FBTyxBQUFQLEFBQ0g7OztBQUVELE9BQU8sQUFBUCxVQUFpQixFQUFFLFlBQUYsQUFBakIiLCJmaWxlIjoiZ2V0X2Nvb2tpZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYWFyb24vRG9jdW1lbnRzL3JlcG9zL2Fhcm9uY29kaW5nMi9hYXJvbmNvZGluZy9mcm9udGVuZCJ9