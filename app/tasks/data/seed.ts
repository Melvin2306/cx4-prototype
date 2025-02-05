import { faker } from "@faker-js/faker";
import fs from "fs";
import path from "path";

import {
  labels,
  priorities,
  statuses,
  editors,
  assignees,
  languages,
} from "./data";

const tasks = Array.from({ length: 100 }, () => ({
  id: `Email-${faker.number.int({ min: 1000, max: 9999 })}`,
  title: faker.hacker.phrase().replace(/^./, (letter) => letter.toUpperCase()),
  summary: faker.lorem.paragraph(),
  status: faker.helpers.arrayElement(statuses).value,
  label: faker.helpers.arrayElement(labels).value,
  urgency: faker.helpers.arrayElement(priorities).value,
  editor: faker.helpers.arrayElement(editors).value,
  assignee: faker.helpers.arrayElement(assignees).value,
  languages: faker.helpers.arrayElement(languages).value,
  confidence: faker.number.int({ min: 1, max: 100 }),
}));

fs.writeFileSync(
  path.join(__dirname, "tasks.json"),
  JSON.stringify(tasks, null, 2),
);

console.log("✅ Tasks data generated.");
