/// <reference path="./components/project-inputs.ts" />
/// <reference path="./components/project-list.ts" />

namespace App {
  new ProjectInput();
  new ProjectList("active");
  new ProjectList("finished");
}
