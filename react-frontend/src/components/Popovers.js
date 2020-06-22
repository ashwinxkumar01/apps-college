import React from 'react';
import { Popover } from 'react-bootstrap';

const Tuition = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Tuition Range</Popover.Title>
      <Popover.Content>
        Filter results based on tuition that suit you. 
        <br/>
        <br/>
        Example: 10000 for lower bound, 20000 for upper bound will return all colleges that are between $10,000 and $20,000 for tuition.
        <br/>
        <br/>
        The checkbox allows you to filter by in-state tuition or by out-of-state tuition. When checked, it will search by out-of-state, and unchecked
        will search by in-state tuition.
      </Popover.Content>
    </Popover>
  );

  const Rankings = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Ranking Range</Popover.Title>
      <Popover.Content>
        Filter results based on rankings that suit you. 
        <br/>
        <br/>
        Example: 1 for lower bound, 10 for upper bound will return all colleges between 1 - 10 in national ranking.
      </Popover.Content>
    </Popover>
  );

  const AppFee = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Application Fee Range</Popover.Title>
      <Popover.Content>
        Filter results based on Application Fees that suit you. 
          <br/>
          <br/>
        Example: 20 for lower bound, 50 for upper bound will return all colleges between $20 - $50 in national ranking.
      </Popover.Content>
    </Popover>
  );

  const AcceptanceRate = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Acceptance Rate Range</Popover.Title>
      <Popover.Content>
        Filter results based on acceptance rates.
          <br/>
          <br/>
        Example: 20 for lower bound, 50 for upper bound will return all colleges that have acceptance rates between 20% - 50%.
      </Popover.Content>
    </Popover>
  );

  const Population = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Population Range</Popover.Title>
      <Popover.Content>
        Filter results based on total undergraduate population of the university.  
          <br/>
          <br/>
        Example: 10000 for lower bound, 30000 for upper bound will return all colleges with population sizes between
        10,000 - 30,000.
      </Popover.Content>
    </Popover>
  );

  const AppType = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Application Type</Popover.Title>
      <Popover.Content>
        Select an option from the dropdown to filter by the application type.
          <br/>
          <br/>
        Example: selecting "Common app" will return all universities that take applications through the Common App. Selecting 'Any' will return all colleges.
      </Popover.Content>
    </Popover>
  );

  const SchoolType = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">School Type</Popover.Title>
      <Popover.Content>
        Select an option from the dropdown to filter by school type, which is either private or public
          <br/>
          <br/>
        Example: selecting "Private" will return all private universities. Selecting 'Any' will return all colleges.
      </Popover.Content>
    </Popover>
  );

  const LetterRec = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Letter of Recommendations</Popover.Title>
      <Popover.Content>
        Filter results based on the number of letter of recommendations needed.
          <br/>
          <br/>
        Example: Selecting "2" will return all universities that require 2 letters of recommendations. Selecting 'Any' will return all colleges.
      </Popover.Content>
    </Popover>
  );

  const StateList = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">States</Popover.Title>
      <Popover.Content>
        Filter results based on state(s) that suit your needs.
          <br/>
          <br/>
        Example: Selecting "CA", "NY", "AL" will return all universities that are in California, New York, and Alabama. Selecting no options will return all colleges.
      </Popover.Content>
    </Popover>
  );

  export {
      Tuition,
      Rankings,
      AcceptanceRate,
      AppFee,
      Population,
      AppType,
      SchoolType,
      StateList,
      LetterRec
  }