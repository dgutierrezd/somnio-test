import React from "react";
import { render, screen, fireEvent } from "@testing-library/react-native";
import { Provider } from "react-redux";
import Users from "../components/Users";
import { User } from "@/redux/interfaces";

describe("Users Component", () => {
  let store: any;
  let users: User[];

  beforeEach(() => {
    users = [
      {
        id: 1,
        name: "John Doe",
        username: "johndoe",
        email: "john@example.com",
        phone: "123-456-7890",
        address: {
          street: "",
          suite: "",
          city: "",
          zipcode: "",
          geo: {
            lat: "",
            lng: "",
          },
        },
        website: "",
        company: {
          name: "",
          catchPhrase: "",
          bs: "",
        },
      },
      {
        id: 2,
        name: "Jane Smith",
        username: "janesmith",
        email: "jane@example.com",
        phone: "987-654-3210",
        address: {
          street: "",
          suite: "",
          city: "",
          zipcode: "",
          geo: {
            lat: "",
            lng: "",
          },
        },
        website: "",
        company: {
          name: "",
          catchPhrase: "",
          bs: "",
        },
      },
    ];

    store = {
      getState: () => ({
        users: {
          users,
          loadingUsers: false,
        },
      }),
      subscribe: jest.fn(),
      dispatch: jest.fn(),
    };
  });

  it("should render user items", () => {
    render(
      <Provider store={store}>
        <Users />
      </Provider>
    );

    expect(screen.getByPlaceholderText("Buscar usuarios...")).toBeDefined();
    expect(screen.getByText("John Doe")).toBeDefined();
    expect(screen.getByText("Jane Smith")).toBeDefined();
  });

  it("should filter users based on search query", () => {
    render(
      <Provider store={store}>
        <Users />
      </Provider>
    );

    const searchInput = screen.getByPlaceholderText("Buscar usuarios...");
    fireEvent.changeText(searchInput, { target: { value: "Jane" } });

    expect(screen.queryByText("John Doe")).not.toBeDefined();
    expect(screen.getByText("Jane Smith")).toBeDefined();
  });
});
