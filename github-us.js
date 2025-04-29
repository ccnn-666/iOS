[Rewrite]
^https:\/\/(raw|gist)\.githubusercontent\.com\/ header-replace Accept-Language en-us
^https:\/\/github\.com\/ header-replace Accept-Language en-us
[Mitm]
hostname = raw.githubusercontent.com,gist.githubusercontent.com,github.com
