import React from 'react';
import { shallow, configure, mount } from 'enzyme'
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
import LeftPane from "./Components/LeftPane/LeftPane";
import RightPane from "./Components/RightPane/RightPane";
import Card from "./Components/LeftPane/CardsContainer/Card/Card";
import CardsContainer from "./Components/LeftPane/CardsContainer/CardsContainer";
import Header from "./Components/LeftPane/Header/Header";
import Footer from "./Components/LeftPane/Footer/Footer";
import OperationCard from "./Components/RightPane/OperationCard/OperationCard";

configure({ adapter: new Adapter() });

describe('Testing adding card process', () => {
  test('The function addCard() is working correctly', () => {
    const component = mount(<LeftPane
        onDelete = {() => {}}
        onAdd = {() => {}}
        onSort = {() => {}}
    />);
    const instance = component.instance();
    instance.addCard();
    expect(instance.state.cardsList[0]).toBeTruthy();
  });

  test('Card component renders correctly', () => {
      const component = mount(<LeftPane
          onDelete = {() => {}}
          onAdd = {() => {}}
          onSort = {() => {}}
      />);
      const instance = component.instance();
      instance.setState({
          cardsList: [1]
      });
      const tree = renderer
          .create(<Card
              value={instance.state.cardsList[0]}
              deleteCard={instance.deleteCard(0)}
          />)
          .toJSON();
      expect(tree).toMatchSnapshot();
  });

});

describe('Testing deleting card process', () => {
    test('The function deleteCard() is working correctly', () => {
        const component = mount(<LeftPane
            onDelete = {() => {}}
            onAdd = {() => {}}
            onSort = {() => {}}
        />);
        const instance = component.instance();
        instance.addCard();
        expect(instance.state.cardsList[0]).toBeTruthy();
        instance.deleteCard(0)();
        expect(instance.state.cardsList[0]).toBeFalsy();

        instance.addCard();
        instance.addCard();
        instance.addCard();
        instance.deleteCard(1)();
        expect(instance.state.cardsList.length).toBe(2);
    });

});

describe('Testing sorting cardsList process', () => {
    test('The function sortCards() is working correctly', () => {
        const CARDS_NUM = 5;

        const component = mount(<LeftPane
            onDelete = {() => {}}
            onAdd = {() => {}}
            onSort = {() => {}}
        />);
        const instance = component.instance();
        do {
            for(let i = 0; i < CARDS_NUM; i++) {
                instance.addCard();
            }
        } while (instance.state.cardsList === instance.state.cardsList.concat().sort((a, b) => {
            return b - a
        }));
        instance.sortCards();
        expect(instance.state.cardsList).toMatchObject(instance.state.cardsList.concat().sort((a, b) => {
            return b - a
        }));
    });

});

describe('Testing adding value to operations array when addCard/deleteCard/sortCards methods is called', () => {
    test('The function addCard() is working correctly', () => {
        const appComponent = mount(<App />);
        const appInstance = appComponent.instance();

        appComponent.find(LeftPane).instance().addCard();
        expect(appInstance.state.operations).toMatchObject(["Add card: 0"]);

        appComponent.find(LeftPane).instance().deleteCard(0)();
        expect(appInstance.state.operations).toMatchObject(["Add card: 0", "Delete card: 0"]);

        appComponent.find(LeftPane).instance().setState({
            cardsList: [1, 2, 10, 99, 6, 17, 25, 1, 5]
        });

        appComponent.find(LeftPane).instance().sortCards();
        expect(appInstance.state.operations).toMatchObject(["Add card: 0", "Delete card: 0", "Sort cards"]);
    });

});

describe('CardsContainer renders correctly on adding/deleting/sorting values in CardsList', () => {
    test('CardsContainer renders correctly after adding a new node', () => {
        const component = shallow(<LeftPane
            onDelete = {() => {}}
            onAdd = {() => {}}
            onSort = {() => {}}
        />);
        const instance = component.instance();
        instance.setState({
            cardsList: [1]
        });
        const tree1 = renderer
            .create(<CardsContainer
                cardsList={instance.state.cardsList}
                deleteCard={instance.deleteCard}
            />)
            .toJSON();
        expect(tree1).toMatchSnapshot();
        instance.setState({
            cardsList: [1, 2]
        });
        const tree2 = renderer
            .create(<CardsContainer
                cardsList={instance.state.cardsList}
                deleteCard={instance.deleteCard}
            />)
            .toJSON();
        expect(tree2).toMatchSnapshot()
    });

    test('CardsContainer renders correctly after deleting a node', () => {
        const component = shallow(<LeftPane
            onDelete = {() => {}}
            onAdd = {() => {}}
            onSort = {() => {}}
        />);
        const instance = component.instance();
        instance.setState({
            cardsList: [1, 2]
        });
        instance.deleteCard(1)();
        const tree = renderer
            .create(<CardsContainer
                cardsList={instance.state.cardsList}
                deleteCard={instance.deleteCard}
            />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('CardsContainer renders correctly before and after sorting', () => {
        const component = shallow(<LeftPane
            onDelete = {() => {}}
            onAdd = {() => {}}
            onSort = {() => {}}
        />);
        const instance = component.instance();
        instance.setState({
            cardsList: [1, 2, 10, 99, 6, 17, 25, 1, 5]
        });
        const tree1 = renderer
            .create(<CardsContainer
                cardsList={instance.state.cardsList}
                deleteCard={instance.deleteCard}
            />)
            .toJSON();
        expect(tree1).toMatchSnapshot();
        instance.sortCards();
        const tree2 = renderer
            .create(<CardsContainer
                cardsList={instance.state.cardsList}
                deleteCard={instance.deleteCard}
            />)
            .toJSON();
        expect(tree2).toMatchSnapshot();
    });
});

describe('Testing if single components renders correctly', () => {
    test('Testing Header', () => {
        const tree = renderer
            .create(<Header
                addCard={() => {}}
                sortCards={() => {}}
            />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
    test('Testing Footer', () => {
        const tree = renderer
            .create(<Footer
            />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
    test('Testing RightPane', () => {
        const tree = renderer
            .create(<RightPane
                operations = {["Add card: 0", "Delete card: 0", "Sort cards"]}
            />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
    test('Testing OperationCard', () => {
        const tree = renderer
            .create(<OperationCard
                msg = "Sort cards"
            />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});

