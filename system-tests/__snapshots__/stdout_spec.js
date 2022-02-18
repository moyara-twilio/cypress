exports['e2e stdout displays errors from failures 1'] = `

====================================================================================================

  (Run Starting)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Cypress:    1.2.3                                                                              │
  │ Browser:    FooBrowser 88                                                                      │
  │ Specs:      1 found (stdout_failing_spec.js)                                                   │
  │ Searched:   cypress/integration/stdout_failing_spec.js                                         │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  stdout_failing_spec.js                                                          (1 of 1)


  stdout_failing_spec
    ✓ passes
    1) fails
    ✓ doesnt fail
    failing hook
      2) "before each" hook for "is failing"
    passing hook
      3) is failing


  2 passing
  3 failing

  1) stdout_failing_spec
       fails:
     Error: foo
      [stack trace lines]

  2) stdout_failing_spec
       failing hook
         "before each" hook for "is failing":
     CypressError: \`cy.visit()\` failed trying to load:

/does-not-exist.html

We failed looking for this file at the path:

/foo/bar/.projects/e2e/does-not-exist.html

The internal Cypress web server responded with:

  > 404: Not Found

Because this error occurred during a \`before each\` hook we are skipping the remaining tests in the current suite: \`failing hook\`
      [stack trace lines]

  3) stdout_failing_spec
       passing hook
         is failing:
     CypressError: \`cy.visit()\` failed trying to load:

/does-not-exist.html

We failed looking for this file at the path:

/foo/bar/.projects/e2e/does-not-exist.html

The internal Cypress web server responded with:

  > 404: Not Found
      [stack trace lines]




  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        5                                                                                │
  │ Passing:      2                                                                                │
  │ Failing:      3                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  3                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     X seconds                                                                        │
  │ Spec Ran:     stdout_failing_spec.js                                                           │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Screenshots)

  -  /XXX/XXX/XXX/cypress/screenshots/stdout_failing_spec.js/stdout_failing_spec -- f     (1280x720)
     ails (failed).png                                                                              
  -  /XXX/XXX/XXX/cypress/screenshots/stdout_failing_spec.js/stdout_failing_spec -- f     (1280x720)
     ailing hook -- is failing -- before each hook (failed).png                                     
  -  /XXX/XXX/XXX/cypress/screenshots/stdout_failing_spec.js/stdout_failing_spec -- p     (1280x720)
     assing hook -- is failing (failed).png                                                         


  (Video)

  -  Started processing:  Compressing to 32 CRF                                                     
  -  Finished processing: /XXX/XXX/XXX/cypress/videos/stdout_failing_spec.js.mp4          (X second)


====================================================================================================

  (Run Finished)


       Spec                                              Tests  Passing  Failing  Pending  Skipped  
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ ✖  stdout_failing_spec.js                   XX:XX        5        2        3        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    ✖  1 of 1 failed (100%)                     XX:XX        5        2        3        -        -  


`

exports['e2e stdout displays errors from exiting early due to bundle errors 1'] = `

====================================================================================================

  (Run Starting)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Cypress:    1.2.3                                                                              │
  │ Browser:    FooBrowser 88                                                                      │
  │ Specs:      1 found (stdout_exit_early_failing_spec.js)                                        │
  │ Searched:   cypress/integration/stdout_exit_early_failing_spec.js                              │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  stdout_exit_early_failing_spec.js                                               (1 of 1)

Oops...we found an error preparing this test file:

  > cypress/integration/stdout_exit_early_failing_spec.js

The error was:

Error: Webpack Compilation Error
./cypress/integration/stdout_exit_early_failing_spec.js
Module build failed (from [..]):
SyntaxError: /foo/bar/.projects/e2e/cypress/integration/stdout_exit_early_failing_spec.js: Unexpected token (1:1)

> 1 | +>
    |  ^
  2 |
      [stack trace lines]

This occurred while Cypress was compiling and bundling your test code. This is usually caused by:

- A missing file or dependency
- A syntax error in the file or one of its dependencies

Fix the error in your code and re-run your tests.

  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        0                                                                                │
  │ Passing:      0                                                                                │
  │ Failing:      1                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     X seconds                                                                        │
  │ Spec Ran:     stdout_exit_early_failing_spec.js                                                │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Video)

  -  Started processing:  Compressing to 32 CRF                                                     
  -  Finished processing: /XXX/XXX/XXX/cypress/videos/stdout_exit_early_failing_spec.     (X second)
                          js.mp4                                                                    


====================================================================================================

  (Run Finished)


       Spec                                              Tests  Passing  Failing  Pending  Skipped  
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ ✖  stdout_exit_early_failing_spec.js        XX:XX        -        -        1        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    ✖  1 of 1 failed (100%)                     XX:XX        -        -        1        -        -  


`

exports['e2e stdout does not duplicate suites or tests between visits 1'] = `

====================================================================================================

  (Run Starting)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Cypress:    1.2.3                                                                              │
  │ Browser:    FooBrowser 88                                                                      │
  │ Specs:      1 found (stdout_passing_spec.js)                                                   │
  │ Searched:   cypress/integration/stdout_passing_spec.js                                         │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  stdout_passing_spec.js                                                          (1 of 1)


  stdout_passing_spec
    file
      ✓ visits file
    google
      ✓ visits google
      ✓ google2
    apple
      ✓ apple1
      ✓ visits apple
    subdomains
      ✓ cypress1
      ✓ visits cypress
      ✓ cypress3


  8 passing


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        8                                                                                │
  │ Passing:      8                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     X seconds                                                                        │
  │ Spec Ran:     stdout_passing_spec.js                                                           │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Video)

  -  Started processing:  Compressing to 32 CRF                                                     
  -  Finished processing: /XXX/XXX/XXX/cypress/videos/stdout_passing_spec.js.mp4          (X second)


====================================================================================================

  (Run Finished)


       Spec                                              Tests  Passing  Failing  Pending  Skipped  
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ ✔  stdout_passing_spec.js                   XX:XX        8        8        -        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    ✔  All specs passed!                        XX:XX        8        8        -        -        -  


`

exports['e2e stdout displays fullname of nested specfile 1'] = `

====================================================================================================

  (Run Starting)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Cypress:    1.2.3                                                                              │
  │ Browser:    FooBrowser 88                                                                      │
  │ Specs:      3 found (nested-1/nested-2/nested-3/spec.js, nested-1/nested-2/nested-3/stdout_spe │
  │             cfile_display_spec_with_a_really_long_name_that_never_has_a_line_break_or_new_line │
  │             .js, nested-1/nested-2/nested-3/stdout_specfile.js)                                │
  │ Searched:   cypress/integration/nested-1/nested-2/nested-3/*                                   │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  nested-1/nested-2/nested-3/spec.js                                              (1 of 3)


  stdout_specfile_display_spec
    ✓ passes


  1 passing


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        1                                                                                │
  │ Passing:      1                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     X seconds                                                                        │
  │ Spec Ran:     nested-1/nested-2/nested-3/spec.js                                               │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Video)

  -  Started processing:  Compressing to 32 CRF                                                     
  -  Finished processing: /XXX/XXX/XXX/cypress/videos/nested-1/nested-2/nested-3/spec     (X second)
                          .js.mp4                                                                   


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  nested-1/nested-2/nested-3/stdout_specfile_display_spec_with_a_reall            (2 of 3)
            y_long_name_that_never_has_a_line_break_or_new_line.js                                  


  stdout_specfile_display_spec
    ✓ passes


  1 passing


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        1                                                                                │
  │ Passing:      1                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  1                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     X seconds                                                                        │
  │ Spec Ran:     nested-1/nested-2/nested-3/stdout_specfile_display_spec_with_a_really_long_name_ │
  │               that_never_has_a_line_break_or_new_line.js                                       │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Screenshots)

  -  /XXX/XXX/XXX/cypress/screenshots/nested-1/nested-2/nested-3/stdout_specfile_disp     (1000x660)
     lay_spec_with_a_really_long_name_that_never_has_a_line_break_or_new_line.js/stdo               
     ut_specfile_display_spec -- passes.png                                                         


  (Video)

  -  Started processing:  Compressing to 32 CRF                                                     
  -  Finished processing: /XXX/XXX/XXX/cypress/videos/nested-1/nested-2/nested-3/stdo     (X second)
                          ut_specfile_display_spec_with_a_really_long_name_that_never               
                          _has_a_line_break_or_new_line.js.mp4                                      


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  nested-1/nested-2/nested-3/stdout_specfile.js                                   (3 of 3)


  stdout_specfile_display_spec
    ✓ passes


  1 passing


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        1                                                                                │
  │ Passing:      1                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     X seconds                                                                        │
  │ Spec Ran:     nested-1/nested-2/nested-3/stdout_specfile.js                                    │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Video)

  -  Started processing:  Compressing to 32 CRF                                                     
  -  Finished processing: /XXX/XXX/XXX/cypress/videos/nested-1/nested-2/nested-3/stdo     (X second)
                          ut_specfile.js.mp4                                                        


====================================================================================================

  (Run Finished)


       Spec                                              Tests  Passing  Failing  Pending  Skipped  
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ ✔  nested-1/nested-2/nested-3/spec.js       XX:XX        1        1        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  nested-1/nested-2/nested-3/stdout_s      XX:XX        1        1        -        -        - │
  │    pecfile_display_spec_with_a_really_                                                         │
  │    long_name_that_never_has_a_line_bre                                                         │
  │    ak_or_new_line.js                                                                           │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  nested-1/nested-2/nested-3/stdout_s      XX:XX        1        1        -        -        - │
  │    pecfile.js                                                                                  │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    ✔  All specs passed!                        XX:XX        3        3        -        -        -  


`

exports['e2e stdout / displays assertion errors'] = `

====================================================================================================

  (Run Starting)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Cypress:    1.2.3                                                                              │
  │ Browser:    FooBrowser 88                                                                      │
  │ Specs:      1 found (stdout_assertion_errors_spec.js)                                          │
  │ Searched:   cypress/integration/stdout_assertion_errors_spec.js                                │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  stdout_assertion_errors_spec.js                                                 (1 of 1)


  assertion errors
    1) fails with assertion diff, no retries
    2) fails with assertion diff, with retries
    3) fails with dom assertion without diff, with retries
    4) fails with dom assertion without diff, with retries


  0 passing
  4 failing

  1) assertion errors
       fails with assertion diff, no retries:

      AssertionError: expected [] to deeply equal [ 1, 2, 3 ]
      + expected - actual

      -[]
      +[ 1, 2, 3 ]
      
      [stack trace lines]

  2) assertion errors
       fails with assertion diff, with retries:

      Timed out retrying after 4000ms
      + expected - actual

      -[]
      +[ 1, 2, 3 ]
      
      [stack trace lines]

  3) assertion errors
       fails with dom assertion without diff, with retries:
     AssertionError: expected '<body>' to have class 'foo'
      [stack trace lines]

  4) assertion errors
       fails with dom assertion without diff, with retries:
     AssertionError: Timed out retrying after 4000ms: expected '<body>' to have class 'foo'
      [stack trace lines]




  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        4                                                                                │
  │ Passing:      0                                                                                │
  │ Failing:      4                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  4                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     X seconds                                                                        │
  │ Spec Ran:     stdout_assertion_errors_spec.js                                                  │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Screenshots)

  -  /XXX/XXX/XXX/cypress/screenshots/stdout_assertion_errors_spec.js/assertion error     (1280x720)
     s -- fails with assertion diff, no retries (failed).png                                        
  -  /XXX/XXX/XXX/cypress/screenshots/stdout_assertion_errors_spec.js/assertion error     (1280x720)
     s -- fails with assertion diff, with retries (failed).png                                      
  -  /XXX/XXX/XXX/cypress/screenshots/stdout_assertion_errors_spec.js/assertion error     (1280x720)
     s -- fails with dom assertion without diff, with retries (failed).png                          
  -  /XXX/XXX/XXX/cypress/screenshots/stdout_assertion_errors_spec.js/assertion error     (1280x720)
     s -- fails with dom assertion without diff, with retries (failed) (1).png                      


  (Video)

  -  Started processing:  Compressing to 32 CRF                                                     
  -  Finished processing: /XXX/XXX/XXX/cypress/videos/stdout_assertion_errors_spec.js     (X second)
                          .mp4                                                                      


====================================================================================================

  (Run Finished)


       Spec                                              Tests  Passing  Failing  Pending  Skipped  
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ ✖  stdout_assertion_errors_spec.js          XX:XX        4        -        4        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    ✖  1 of 1 failed (100%)                     XX:XX        4        -        4        -        -  


`

exports['e2e stdout respects quiet mode 1'] = `


  stdout_passing_spec
    file
      ✓ visits file
    google
      ✓ visits google
      ✓ google2
    apple
      ✓ apple1
      ✓ visits apple
    subdomains
      ✓ cypress1
      ✓ visits cypress
      ✓ cypress3


  8 passing


`
