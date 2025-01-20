import { faker } from "@faker-js/faker";
import fs from "fs";
import path from "path";

import { labels, priorities, statuses, editors, assignees } from "./data";

const tasks = Array.from({ length: 100 }, () => ({
  id: `Email-${faker.number.int({ min: 1000, max: 9999 })}`,
  title: faker.hacker.phrase().replace(/^./, (letter) => letter.toUpperCase()),
  status: faker.helpers.arrayElement(statuses).value,
  label: faker.helpers.arrayElement(labels).value,
  urgency: faker.helpers.arrayElement(priorities).value,
  editor: faker.helpers.arrayElement(editors).value,
  assignee: faker.helpers.arrayElement(assignees).value,
  confidence: faker.number.int({ min: 1, max: 100 }),
}));

fs.writeFileSync(
  path.join(__dirname, "tasks.json"),
  JSON.stringify(tasks, null, 2),
);

console.log("✅ Tasks data generated.");
