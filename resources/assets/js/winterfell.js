/*
 |--------------------------------------------------------------------------
 | Winterfell - React JS Forms
 |--------------------------------------------------------------------------
 |
 | Winterfell allows us to build up complex, multi-page forms with
 | conditional questions, validation and conditional-page switching via a
 | JSON schema, rendered by React.
 |
 */

var React      = window.React = require('react');
var ReactDOM   = window.ReactDOM = require('react-dom');
var JSONView   = require('jquery-jsonview');

var Winterfell = require('winterfell');

var schema      = require('./schemas/schema');

var onRender = () => {
  console.log('Great news! Winterfell rendered successfully');
};

var onUpdate = (questionAnswers) => {
  console.log('Question Updated! The current set of answers is: ', questionAnswers);
};
var onSwitchPanel = (panel) => {
  console.log('Moving on to the panel that is identified as "' + panel.panelId + '"');
};

var onSubmit = (questionAnswers, target) => {
  console.log('Form submitted!', questionAnswers);
  console.log('-----');
  console.log('For this example, we disabled normal form submission functionality. ');
  console.log('-----');
  alert('Submitted. Check the console to see the answers!');
};

window.onload = function() {

  ReactDOM.render(
    <Winterfell schema={schema}
                disableSubmit={true}
                onRender={onRender}
                onUpdate={onUpdate}
                onSwitchPanel={onSwitchPanel}
                onSubmit={onSubmit} />,
    document.getElementById('form')
  );

  $('#json-view').JSONView($('#json-view').html());

 };
