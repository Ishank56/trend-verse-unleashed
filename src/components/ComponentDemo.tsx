
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const ComponentDemo = () => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Component Library Demo</h2>
      
      <div className="space-y-8">
        <section>
          <h3 className="text-xl font-semibold mb-4">Buttons</h3>
          <div className="flex flex-wrap gap-4">
            <Button variant="default">Default Button</Button>
            <Button variant="destructive">Destructive Button</Button>
            <Button variant="outline">Outline Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="ghost">Ghost Button</Button>
            <Button variant="link">Link Button</Button>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4">Cards</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Example Card</CardTitle>
                <CardDescription>This is a basic card component from shadcn/ui</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Cards can contain any content you want to display in a structured way.</p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Cancel</Button>
                <Button>Submit</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Input Example</CardTitle>
                <CardDescription>A card with an input field</CardDescription>
              </CardHeader>
              <CardContent>
                <Input placeholder="Enter your text here" />
              </CardContent>
              <CardFooter>
                <Button className="w-full">Save</Button>
              </CardFooter>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ComponentDemo;
