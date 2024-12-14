import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { SubscriptionDurationEnum, SubscriptionFeatureEnum, SubscriptionTitleEnum } from '@/types/subscription';
import { cn } from '@/lib/utils';
import { Car, Check } from 'lucide-react';
import Link from 'next/link';

type SubscriptionCard = {
  title: SubscriptionTitleEnum;
  description: string;
  price: string;
  duration: SubscriptionDurationEnum | '';
  highlight: string;
  features: SubscriptionFeatureEnum[];
  priceId: string;
};

const subscriptionCards: SubscriptionCard[] = [
  {
    title: SubscriptionTitleEnum.STARTER,
    description: 'Perfect for trying out plura',
    price: 'Free',
    duration: '',
    highlight: 'Key features',
    features: [
      SubscriptionFeatureEnum.SUB_ACCOUNTS_3,
      SubscriptionFeatureEnum.TEAM_MEMBERS_2,
      SubscriptionFeatureEnum.UNLIMITED_PIPELINES,
    ],
    priceId: '',
  },
  {
    title: SubscriptionTitleEnum.UNLIMITED_SAAS,
    description: 'The ultimate agency kit',
    price: '$199',
    duration: SubscriptionDurationEnum.MONTH,
    highlight: 'Key features',
    features: [SubscriptionFeatureEnum.REBILLING, SubscriptionFeatureEnum.SUPPORT_TEAM_24_7],
    priceId: 'price_1OYxkqFj9oKEERu1KfJGWxgN',
  },
  {
    title: SubscriptionTitleEnum.BASIC,
    description: 'For serious agency owners',
    price: '$49',
    duration: SubscriptionDurationEnum.MONTH,
    highlight: 'Everything in Starter, plus',
    features: [SubscriptionFeatureEnum.UNLIMITED_SUB_ACCOUNTS, SubscriptionFeatureEnum.UNLIMITED_TEAM_MEMBERS],
    priceId: 'price_1OYxkqFj9oKEERu1NbKUxXxN',
  },
];

function SubscriptionCardWrapper() {
  return (
    <div className='flex flex-wrap justify-center gap-4'>
      {subscriptionCards.map((subscription) => (
        <SubscriptionCard key={subscription.title} subscription={subscription} />
      ))}
    </div>
  );
}

function SubscriptionCard({ subscription }: { subscription: SubscriptionCard }) {
  return (
    <Card
      className={cn('w-[300px] flex flex-col justify-between', {
        'border-2 border-primary': subscription.title === SubscriptionTitleEnum.UNLIMITED_SAAS,
      })}
    >
      <CardHeader>
        <CardTitle
          className={cn('', {
            'text-muted-foreground': subscription.title !== SubscriptionTitleEnum.UNLIMITED_SAAS,
          })}
        >
          {subscription.title}
        </CardTitle>
        <CardDescription>{subscription.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <span className='text-4xl font-bold'>{subscription.price}</span>
        <span className='text-muted-foreground'>/m</span>
      </CardContent>
      <CardFooter className='flex flex-col items-start gap-4'>
        <div>
          {subscription.features.map((feature) => (
            <div key={feature} className='flex items-center gap-2'>
              <Check className='text-muted-foreground' />
              <p>{feature}</p>
            </div>
          ))}
        </div>
        <Link
          href={`agency?plan=${subscription.priceId}`}
          className={cn('w-full text-center bg-primary p-2 rounded-md', {
            '!bg-muted-foreground': subscription.title !== SubscriptionTitleEnum.UNLIMITED_SAAS,
          })}
        >
          Get Started
        </Link>
      </CardFooter>
    </Card>
  );
}

export default SubscriptionCardWrapper;
