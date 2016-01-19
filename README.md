# Ember-base

This is the base Ember CLI frontend app for CCHMC.  It defaults to using ember-data and the
[JSONAPI Spec](http://jsonapi.org/).  It is configured with an api and testing framework
to mock the authentication request.  You may configure the API endpoints for authentication
in the config along with the host and namespace.  One caveat for the ember-cli-sass-pods is
that you have to touch/save a file in the styes/ directory for the pod styles to be
refreshed (this is a bug and they are working on fixing it).

Addons Included:

* [ember-cli-bootstrap-sassy](https://github.com/lifegadget/ember-cli-bootstrap-sassy) - bootstrap css/js framework
* [ember-cli-mirage](https://github.com/samselikoff/ember-cli-mirage) - Server mocking
* [ember-cli-sass-pods](https://github.com/DudaDev/ember-cli-sass-pods) - Sass comipling with pod structure
* [ember-cli-autoprefixer](https://github.com/kimroen/ember-cli-autoprefixer) - CSS autoprefixer
* [ember-moment](https://github.com/stefanpenner/ember-moment) - Date handling
* [ember-simple-auth](https://github.com/simplabs/ember-simple-auth) - Authentication support
* [ember-cli-selectize](https://github.com/miguelcobain/ember-cli-selectize) - Select box enhancements
* [ember-truth-helpers](https://github.com/jmurphyau/ember-truth-helpers) - HTMLBars if helpers
* [ember-suave](https://github.com/dockyard/ember-suave/) - Code style guide


Other Addons (not installed by default):

* [liquid-fire](https://github.com/ember-animation/liquid-fire) - Animation/Transitions
* [ember-notify](https://github.com/aexmachina/ember-notify) - Alert/Notifications

You can find more by using [Ember Observer](http://emberobserver.com/)

Included Transforms:

* json - for json blob data
* moment-date - for dates

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Starting Project based on this

* Replace <app-directory> with the application name you would like
* Create an empty project and initialize git (`mkdir <app-directory && cd <app-directory> && git init`)
* Add remote origin to new repo (`git remote add origin <your-new-repo-url>`)
* Add another remote for ember-base (`git remote add ember-base ssh://git@bmiatlasp.chmcres.cchmc.org:7999/ossdevel/ember-base.git`)
* Pull in the ember-base into master branch (`git pull ember-base master`)
* Remove ember-base remote (`git remote remove ember-base`)
* rename all instances of the namespace (`grep -r -l 'ember-base' * | xargs sed -i.old 's/ember-base/<app-directory>/g'`)
* remove all of the `.old` files (`find . -name '*.old' -exec rm {} \;`)
* Commit changes to the new repository for the starting point (`git commit -am  "Base Ember.js app based on ember-base"`)
* Push initial template to your new repo (`git push --set-upstream origin master`)
    * You will need to use `--force` if you want to overwrite the git repo code.
* Install dependencies for new project (`npm install && bower install`)

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
