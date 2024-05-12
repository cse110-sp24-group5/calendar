describe('Basic user flow for Website', () => {
    beforeAll(async () => {
      await page.goto('https://cse110-sp24-group5.github.io/calendar/');
    });
  
    it('Test', async () => {
      console.log('Test passed!');
      const calendarWidgetParent = await page.$('.calendar-widget.parent');
      const calendarChild = await calendarWidgetParent.$('.calendar.child');
      const days = await calendarChild.$('.days');
      const day0 = await days.$('li');
      await day0.click();
      const newTaskInput = await page.$('#newTaskInput');
      await newTaskInput.type('temp');
      const addTaskButton = await page.$('#addTaskButton');
      await addTaskButton.click();
      const taskBox = await page.$('.task-box');
      const taskListUl = await taskBox.$('.task-list-ul');
      const li = await taskListUl.$$('li');
      expect(li.length).toBe(1);
    });
});
